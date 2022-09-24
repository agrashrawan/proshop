export const productListReducers = (state = { products : [] }, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { loading : true, products : [] }
        case 'PRODUCT_LIST_SUCCESS':
            return { loading : false, products : action.payload }
        case 'PRODUCT_LIST_FAIL':
            return { loading : false, error : action.payload }
        default:
            return state

    } 
}


export const productDetailsReducers = (state = { product : { reviews : [] } }, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAILS_REQUEST':
            return { loading : true, ...state }
        case 'PRODUCT_DETAILS_SUCCESS':
            return { loading : false, product : action.payload }
        case 'PRODUCT_DETAILS_FAIL':
            return { loading : false, error : action.payload }
        default:
            return state

    } 
}


export const productDeleteReducers = (state = { }, action) => {
    switch (action.type) {
        case 'PRODUCT_DELETE_REQUEST':
            return { loading : true}
        case 'PRODUCT_DELETE_SUCCESS':
            return { loading : false, success : true }
        case 'PRODUCT_DELETE_FAIL':
            return { loading : false, error : action.payload }
        default:
            return state

    } 
}




export const productUpdateReducers = (state = { }, action) => {
    switch (action.type) {
        case 'PRODUCT_UPDATE_REQUEST':
            return { loading : true}
        case 'PRODUCT_UPDATE_SUCCESS':
            return { loading : false, product: action.payload }
        case 'PRODUCT_UPDATE_FAIL':
            return { loading : false, error : action.payload }
        default:
            return state

    } 
}




export const productCreateReducers = (state = { }, action) => {
    switch (action.type) {
        case 'PRODUCT_CREATE_REQUEST':
            return { loading : true}
        case 'PRODUCT_CREATE_SUCCESS':
            return { loading : false, product: action.payload }
        case 'PRODUCT_CREATE_FAIL':
            return { loading : false, error : action.payload }
        default:
            return state
    } 
}



export const reviewCreateReducers = (state = { }, action) => {
    switch (action.type) {
        case 'REVIEW_CREATE_REQUEST':
            return { loading : true}
        case 'REVIEW_CREATE_SUCCESS':
            return { loading : false, success: true }
        case 'REVIEW_CREATE_FAIL':
            return { loading : false, error : action.payload }
        default:
            return state
    } 
}


