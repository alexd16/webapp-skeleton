describe App, ->
  Given -> @subject = new App
  Then -> expect(@subject.sayHello()).toBe 'Hello World'

describe Zed, ->
  Given -> @subject = new Zed
  Then -> expect(@subject.sayZed()).toBe 'Zed'
