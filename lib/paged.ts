import { Handler, Previewer, registerHandlers } from 'pagedjs'

class MyHandler extends Handler {
  constructor(chunker: any, polisher: any, caller: any) {
    super(chunker, polisher, caller)
  }
}

export async function domPaged() {
  registerHandlers(MyHandler)
  const paged = new Previewer()
  await paged.preview()
  return paged
}
