import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../services/useFetch';

const UserDetail = () => {
  const [user, setUser] = useState({});
  const userFetch = useFetch();
  const userId = useParams();

  const getUser = async () => {
    console.log(userId);
    const resUser = await userFetch.fetch({ url: `https://jsonplaceholder.typicode.com/users/${userId.id}` });
    if (resUser) setUser(resUser.data);
    console.log(resUser.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <pre>
      { JSON.stringify(user, null, '\t') }
    </pre>
  );
};

export default UserDetail;
