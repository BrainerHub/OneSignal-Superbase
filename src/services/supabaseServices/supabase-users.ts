import { supabase } from "@/pages";

const createUser = async (
  userName: string,
  password: string,
  email: string
) => {
  try {
    const { error, data } = await supabase.from("users").insert({
      userName: userName,
      password: password,
      email: email,
    });
    console.log("Yeah Data ", data);
    return {
      data,
      error: false,
    };
  } catch (error) {
    return { data: null, error: true };
  }
};

const updateUser = async (
  userName: string,
  password: string,
  email: string,
  id:string,
) => {
  try {
    const { error, data } = await supabase.from("users").update({
      userName: userName,
      password: password,
      email: email,
    }).eq("id", id)
    console.log("Yeah Data ", data);
    return {
      data,
      error: false,
    };
  } catch (error) {
    return { data: null, error: true };
  }
};

const getAllUser = async () => {
  try {
    const { error, data } = await supabase.from("users").select();
    console.log("Yeah Data ", data);

    return { data: data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

const deleteUser = async (id:string) => {
  try{
     const {data, error} = await supabase.from("users").delete().eq("id", id)
    //  console.log("Yeah data", data);

     return{data:data, error:false};
  }
  catch(error){
    return{data:null, error:true};
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser,
  updateUser,
  getAllUser,
  deleteUser
};
