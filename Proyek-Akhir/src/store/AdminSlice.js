import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  namaLayanan: '',
  alamat: '',
  description: '',
  harga: '',
  image: '',
  loading: false,
  createdPost: null,
};

const AdminSlice = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNamaLayanan: (state, action) => {
      state.namaLayanan = action.payload;
    },
    setAlamat: (state, action) => {
      state.alamat = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setHarga: (state, action) => {
      state.harga = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setErrorText: (state, action) => {
      state.errorText = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCreatedPost: (state, action) => {
      state.createdPost = action.payload;
    },
    resetForm: (state) => {
      state.name = '';
      state.namaLayanan = '';
      state.alamat = '';
      state.description = '';
      state.harga = '';
      state.image = '';
      state.errorText = '';
      state.loading = false;
      state.createdPost = null;
    },
  },
});

export const {
  setNama,
  setNamaLayanan,
  setAlamat,
  setDescription,
  setHarga,
  setImage,
  setErrorText,
  setLoading,
  setCreatedPost,
  resetForm,
} = AdminSlice.actions;

export default AdminSlice.reducer;
