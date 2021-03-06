
export const MODAL_SHOW = 'MODAL_SHOW'
export const MODAL_HIDE = 'MODAL_HIDE'

export const modalShow = name => ({
  type: MODAL_SHOW,
  payload: {
    name,
  },
  meta: {
    gtm: name,
  },
})

export const modalHide = name => ({
  type: MODAL_HIDE,
  payload: {
    name,
  },
})
