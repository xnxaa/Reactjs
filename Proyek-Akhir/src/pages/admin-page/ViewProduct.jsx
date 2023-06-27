import { Card, CardContent, Typography, Button, Modal, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavbarLogin from '../Styles/NavbarLogin';

const ViewProduct = () => {
  const createdPost = useSelector((state) => state.regisForm.createdPost);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavbarLogin />
      <div style={{ textAlign: 'center' }}>
        <Typography marginTop={10} align="center">
          <h1>Halaman Registrasi Teknisi</h1>
        </Typography>
        <Card sx={{ width: 500, marginBottom: 10 }}>
          <CardContent>
            <Grid container spacing={2}>
              {createdPost && (
                <Grid item xs={12}>
                  <div>
                    <Typography variant="body1" align="left">Nama: {createdPost.name}</Typography>
                    <Typography variant="body1" align="left">Nomor Hp: {createdPost.namaLayanan}</Typography>
                    <Typography variant="body1" align="left">Alamat: {createdPost.alamat}</Typography>
                    <Typography variant="body1" align="left">Tempat Lahir: {createdPost.description}</Typography>
                    <Typography variant="body1" align="left">Tanggal Lahir: {createdPost.harga}</Typography>
                    <Typography variant="body1" align="left">Jenis Kelamin: {createdPost.image}</Typography>
                  </div>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewProduct;
