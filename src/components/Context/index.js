  
import React, { useMemo, useState } from 'react';
import {getAll, postInfo, deleteInfo, updateInfo} from '../../libs/http';

const Server = React.createContext();

export function ServerProvider(props) {

  const[ info, setInfo ] = useState([]);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);

  const callAPI = async () => {
    setLoad(false);
    const data = await getAll();
    setInfo(data);
    setLoad(true);
  };

  const callApiAdd = async (e) => {
    await postInfo(e);
    callAPI();
  };

  const callApiDelete = async (id) => {
    await deleteInfo(id);
    callAPI();
  };

  const callApiUpdate = async (id, body) => {
    await updateInfo(id, body);
    callAPI();
  };

  const value = useMemo(() => {
    return ({ 
      info,
      load,
      visible,
      callAPI,
      callApiAdd,
      callApiDelete,
      setVisible,
      callApiUpdate
    })
  }, [load, info, visible, callAPI, callApiAdd, callApiDelete,
    setVisible, callApiUpdate]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}