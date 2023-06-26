import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useClient from '../rest-client/index';
import Navbar from '../Styles/NavbarAdmin';

const ProductList = () => {
  const client = useClient();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.get('/tim4_product1');
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleItemClick = (itemId) => {
    navigate(`/product/${itemId}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Typography variant="h4" component="h1" align="center" style={{ marginTop: '20px', marginBottom: '20px' }}>
        Tambah Layanan
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <TextField
          label="Cari Produk"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginRight: '10px', flexGrow: 1 }}
        />
      </div>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
            <Card style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {product.category}
                </Typography>
                <img src={require(`../../components/admin/${product.image}`).default} alt={product.name} style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
                <Typography variant="body2" component="p">
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Biaya Layanan: {product.harga}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleItemClick(product.id)}
                  style={{ marginTop: '10px', backgroundColor: '#fbbc05' }}
                >
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          position: 'absolute',
          width: '1230px',
          height: '195px',
          top: '1800px',
          bottom: 0,
          backgroundColor: '#EEEEEE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: '0 20px',
          textAlign: 'right',
          left: '0px'
        }}
      >
        <Typography variant="body1" color="text.secondary">
          ELECSOLUTIONS
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <span style={{ display: 'flex', alignItems: 'flex-end' }}>
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ marginLeft: '5px' }}>2023 Elecsolutions</span>
            </span>
          </span>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Elecsolutions
          <br />
          +1 897 6335 827
          <br />
          Jln. Jenderal Gatot Subroto Jakarta 10270
          <br />
          Gedung Nusantara III
        </Typography>
      </div>
    </div>
  );
};

export default ProductList;
