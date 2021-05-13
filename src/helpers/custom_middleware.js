
export const custom_middleware = (api) => store => next => async action =>{
    if(typeof(action.type) === 'function'){
        
        const {Start, Success, Failure} = action.processCallStack;

        if(typeof(Start) !== 'function' && typeof(Success) !== 'function' && typeof(Failure) !== 'function')
            throw 'Process call stack should have \n1. start: function() \n2. success: function() \n3. failure: function()';

        store.dispatch(Start());
        try{
            const response = await action.type(api, ...action.payload);
            store.dispatch(Success(response));
        }
        catch(error){
            store.dispatch(Failure(error));
        }
    }

    return next(action);
}