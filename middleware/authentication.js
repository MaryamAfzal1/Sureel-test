import Parse from 'parse';
export default function({route, redirect}) {
    var currentUser = Parse.User.current();
    if (!currentUser) {
        return redirect('/login');
    }
}