function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); 
// What's the result? error That’s because rules that set this do not look at
//  object definition. Only the moment of call matters.