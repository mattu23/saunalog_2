// middleware/auth.js

export default function ({ store, redirect }) {
  // 認証されているか確認
  if (!store.state.auth.loggedIn) {
    return redirect('/signin')
  }
}
