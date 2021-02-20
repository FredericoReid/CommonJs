module.exports=(x)=>{
    var par = ()=>{
        if ((x%2)==0){
            return true;
        }

        else{
            return false;
        }
    }

    return {
       msg:'o numero eh par?',
       value: par()     
    };

};