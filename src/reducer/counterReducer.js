const initialState = 0;
function counter(state=initialState, action){
    switch(action.type){
      case 'Inc':
        return {data:state.data+ action.payload};
        case 'Dec':
          return {data:state.data-action.payload};
      default:
      return {data:state};
    }
  }

  export default counter;