import { makeAutoObservable } from "mobx";

class ApplicationStore {

  public currentIndex: number = 0

  public constructor() {
    makeAutoObservable(this)
  }

  public updateCurrentIndex(newIndex: number) {
    this.currentIndex = newIndex
  }

}

export default ApplicationStore