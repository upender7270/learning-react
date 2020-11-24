import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class UserStore {
  @observable getUsersApiStatus
  @observable getUsersApiError
  @observable users
  userService

  constructor(userService) {
    this.userService = userService
    this.init()
  }

  @action
  init() {
    this.getUsersApiStatus = API_INITIAL
    this.getUsersApiError = null
    this.users = []
  }

  @action.bound
  setUsersAPIResponse(usersResponse) {
    this.users = usersResponse.map((user) => user.name)
  }

  @action.bound
  setUsersAPIError(error) {
    this.getUsersApiError = error
  }

  @action.bound
  setUsersAPIStatus(apiStatus) {
    this.getUsersApiStatus = apiStatus
  }

  @action.bound
  getUsersAPI() {
    const usersPromise = this.userService.getUsersAPI()
    return bindPromiseWithOnSuccess(usersPromise)
      .to(this.setUsersAPIStatus, this.setUsersAPIResponse)
      .catch(this.setUsersAPIError)
  }

  @action
  clearStore() {
    this.init()
  }
}

export default UserStore
