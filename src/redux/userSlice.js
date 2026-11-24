import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 1. Le thunk : appel à l'API de login
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()

    if (!response.ok) {
      return rejectWithValue(data.message)
    }
    return data.body.token
  }
)



export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async(_,{ getState, rejectWithValue}) => {
    const token = getState().user.token 
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    })
    const data = await response.json()

    if (!response.ok) {
      return rejectWithValue(data.message)
    }
    return data.body
  }
)

// 2. L'état initial
const initialState = {
  token: null,
  user: null,
  status: 'idle',
  error: null,
}

// 3. La slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.user = null
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})

export const { logout } = userSlice.actions
export default userSlice.reducer





