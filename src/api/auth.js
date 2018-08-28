import { AsyncStorage } from 'react-native'

import TokenService from '@around25/jwt-utils'
const Token = new TokenService({
  storageSystem: AsyncStorage
});

const login = (user, pass, callback=()=>{}) => {
 
  const uri = "http://instalura-api.herokuapp.com/api/public/login";
  const requestInfo = {
	  method: 'POST',
	  body: JSON.stringify({
		  login: user,
		  senha: pass,
	  }),
	  headers: new Headers({
		  'Content-type': 'application/json'
	  })
  }
  fetch(uri, requestInfo)
	  .then(response => {
		  if(response.ok)
			  return response.text();

		  throw new Error("Não foi possível efetuar login.");
	  })
		.then(token => {
			AsyncStorage.setItem('token', token);
			AsyncStorage.setItem('usuario', user);
			callback('true');
		})
			.catch(e => {				
				callback(e.message);
			}
  	)
  // Make API call to retrieve an access token
  //const tok = 'this_is_a_demo_access_token';  
  //return Token.store(tok);

}

const isLoggedIn = async () => {
  //const tok = await Token.get();
  const tok = await AsyncStorage.getItem('token');  
  return !!tok
}

const logout = () => {
  //return Token.remove();
  return AsyncStorage.clear();
}

export {
  login,
  isLoggedIn,
  logout
}
