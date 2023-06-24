import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nama: '',
  nomor: '',
  email: '',
  alamat: '',
  tempatLahir: '',
  tanggalLahir: '',
  jenisKelamin: '',
  keahlian: '',
  errorText: '',
  loading: false,
  createdPost: null,
};

const RegisFormSlice = createSlice({
  name: 'RegisForm',
  initialState,
  reducers: {
    setNama: (state, action) => {
      state.nama = action.payload;
    },
    setNomor: (state, action) => {
      state.nomor = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAlamat: (state, action) => {
      state.alamat = action.payload;
    },
    setTempatLahir: (state, action) => {
      state.tempatLahir = action.payload;
    },
    setTanggalLahir: (state, action) => {
      state.tanggalLahir = action.payload;
    },
    setJenisKelamin: (state, action) => {
      state.jenisKelamin = action.payload;
    },
    setKeahlian: (state, action) => {
      state.keahlian = action.payload;
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
      state.nama = '';
      state.nomor = '';
      state.email = '';
      state.alamat = '';
      state.tempatLahir = '';
      state.tanggalLahir = '';
      state.jenisKelamin = '';
      state.keahlian = '';
      state.errorText = '';
      state.loading = false;
      state.createdPost = null;
    },
  },
});

export const {
  setNama,
  setNomor,
  setEmail,
  setAlamat,
  setTempatLahir,
  setTanggalLahir,
  setJenisKelamin,
  setKeahlian,
  setErrorText,
  setLoading,
  setCreatedPost,
  resetForm,
} = RegisFormSlice.actions;

export default RegisFormSlice.reducer;
