(($) ->
  # TODO: detecting audio with canPlay is f***ed
  # Hopefully get more robust later
  # audio.canPlayType("audio/ogg") === "maybe" WTF?
  # http://ajaxian.com/archives/the-doctor-subscribes-html-5-audio-cross-browser-support

  directory = App?.directories?.sounds || "sounds"
  format = "wav"
  sounds = {}

  loadSoundChannel = (name) ->
    url = "#{BASE_URL}/#{directory}/#{name}.#{format}"

    sound = $('<audio />',
      autobuffer: true
      preload: 'auto'
      src: url
    ).get(0)

  Sound = (id, maxChannels) ->
    play: ->
      Sound.play(id, maxChannels)

    stop: ->
      Sound.stop(id)

  $.extend Sound,
    play: (id, maxChannels) ->
      # TODO: Too many channels crash Chrome!!!1
      maxChannels ||= 4

      unless sounds[id]
        sounds[id] = [loadSoundChannel(id)]

      channels = sounds[id]

      freeChannels = $.grep channels, (sound) ->
        sound.currentTime == sound.duration || sound.currentTime == 0

      if channel = freeChannels.first()
        try
          channel.currentTime = 0

        channel.play()
      else
        if !maxChannels || channels.length < maxChannels
          sound = loadSoundChannel(id)
          channels.push(sound)
          sound.play()

    playFromUrl: (url) ->
      sound = $('<audio />').get(0)
      sound.src = url

      sound.play()

      return sound

    stop: (id) ->
      sounds[id]?.stop()

    window.Sound = Sound
)(jQuery)

