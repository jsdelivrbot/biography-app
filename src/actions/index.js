export function selectCelebrity(celebrity){
    return{
      type: 'CELEBRITY_SELECTED',
      payload: celebrity
    };
}
