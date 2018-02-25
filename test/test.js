import test from 'ava'
import sinon from 'sinon'
import * as Tasker from '../sdk/tasker'
import * as HtmlTools from '../src/tools/html'
import Tasks from '../src/tasks'

let sandbox

test.beforeEach(t => {
  sandbox = sinon.sandbox.create()
})

test.afterEach.always(() => {
  sandbox.restore()
})

test('write some tests', t => {
  // sandbox
  //   .stub(HtmlTools, 'queryHtml')
  //   .returns(Promise.resolve('bar'))
  // sandbox.stub(Tasker, 'setLocal')

  Tasks.packtpub.run()

  t.pass()
})
