import { makeAutoObservable } from 'mobx'

class ApplicationStore {
  // public currentIndex = 0

  public constructor() {
    makeAutoObservable(this)
  }

  // public updateCurrentIndex(newIndex: number) {
  //   console.log(this.currentIndex, newIndex)
  //   this.currentIndex = newIndex
  // }
}

export default ApplicationStore
