DebugConsole = () ->
  REPL = (input, output) ->
    print = (message) ->
      output.append($ "<li />",
        text: message
      )
  
    run: () ->
      source = input.val()
      try
        code = CoffeeScript.compile source, bare: true
        # HACK: Removing var declarations
        if code.indexOf("var") == 0
          code = code.substring(code.indexOf("\n"))
        result = eval(code)
        print " => #{result}"
        input.val('')
      catch error
        if error.stack
          print error.stack
        else
          print error.toString()

  container = $ "<div />",
    class: "console"

  input = $ "<textarea />"
  output = $ "<ul />"
  runButton = $ "<button />",
    text: "Run"
  
  repl = REPL(input, output)
  
  container.append(output).append(input).append(runButton)

  $ ->
    runButton.click () ->
      repl.run()

    $("body").append(container)

