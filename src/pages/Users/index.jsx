import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import useFetch from '../../services/useFetch';
import Title from '../../components/Title';
import CardList from '../../components/CardList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userFetch = useFetch();

  const getUsers = async () => {
    const results = await userFetch.fetch({ url: 'https://jsonplaceholder.typicode.com/users' });
    setUsers(results.data);
    setLoading(results.loading);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ pt: 14, pb: 6 }}>
        <Grid>
          <Grid>
            <Title>Users</Title>
          </Grid>
        </Grid>
      </Container>
      <Container component="div" maxWidth="lg">
        <Grid container spacing={4}>
          {
            loading ? <h1>Cargando...</h1> : <CardList users={users} />
          }
        </Grid>
      </Container>
    </>
  );
};

export default Users;
