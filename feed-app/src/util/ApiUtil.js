import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN } from "../common/constants";

const request = options => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export const login = (loginRequest) => {
  return request({
    url: API_BASE_URL + "/auth/signin",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
};

// import axios from "axios";
// import { API_BASE_URL } from "../common/constants";
const frameToken = (token) => `Bearer ${token}`;

export const loginApi = async (username, password) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/login`;
    const apiResponse = await axios.post(url, { username, password });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (e) {
    console.log(e);
  } finally {
    return response;
  }
};

export const signUpApi = async (
  username,
  name,
  emailID,
  phoneNumber,
  password
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/signup`;
    const apiResponse = await axios.post(url, {
      username,
      name,
      emailID,
      phoneNumber,
      password,
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const getFeedsApi = async (token, excludeUsername) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts`;
    const apiResponse = await axios.get(url, {
      headers: { Authorization: frameToken(token) },
      params: { excludeUsername },
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const addFeedApi = async (token, username, post, imageUrl) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts/username/${username}`;
    const apiResponse = await axios.post(
      url,
      { post, imageUrl },
      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};


export const getMyFeedsApi = async (token, username) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts/username/${username}`;
    const apiResponse = await axios.get(url, {
      headers: { Authorization: frameToken(token) },
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const getBasicProfileApi = async (token, username) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/basicprofile/${username}`;
    const apiResponse = await axios.get(
      url,

      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const updateBasicProfileApi = async (
  token,
  position,
  company,
  username,
  skills,
  certification,
  companyAddress,
  interests,
  experience,
  education,
  languages
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/personal/profile`;
    const apiResponse = await axios.put(
      url,
      {
        position,
        company,
        username,
        skills,
        certification,
        companyAddress,
        interests,
        experience,
        education,
        languages,
      },
      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const getAddressApi = async (token, username) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/address/${username}`;
    const apiResponse = await axios.get(
      url,

      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const updateAddressApi = async (
  token,
  username,
  city,
  state,
  country,
  address,
  pincode
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/personal/address`;
    const apiResponse = await axios.put(
      url,
      {
        username,
        city,
        state,
        country,
        address,
        pincode,
      },
      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const updateSecurityApi = async (
  token,
  id,
  securityQuestion1,
  securityAnswer1,
  securityQuestion2,
  securityAnswer2,
  securityQuestion3,
  securityAnswer3,
  phoneNumber,
  userPassword
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/personal/security`;
    const apiResponse = await axios.put(
      url,
      {
        id,
        securityQuestion1,
        securityAnswer1,
        securityQuestion2,
        securityAnswer2,
        securityQuestion3,
        securityAnswer3,
        phoneNumber,
        userPassword,
      },
      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};