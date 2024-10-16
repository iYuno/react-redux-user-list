import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../model/user";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/iYuno/db/users",
    );

    return response.data;
  },
);

interface UserListState {
  users: User[];
  loading: boolean;
}

const initialState: UserListState = {
  users: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sortByCity: state => {
      state.users.sort((a, b) => a.city.localeCompare(b.city));
    },
    sortByCompany: state => {
      state.users.sort((a, b) => a.company.localeCompare(b.company));
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        user => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export const { sortByCity, sortByCompany, updateUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
