import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/Service/Index";
import { Root} from "@/TypeScript/commonallinterface";
import { Box, Grid, ListItem, Paper, Skeleton, Typography, colors } from "@mui/material";
import { Endpoints} from "./api/EndPointConfig";
import Wrapper from "./Wrapper/Wrapper";
import Link from "next/link";




const inter = Inter({ subsets: ["latin"] });




export default function Home() {

  

  const {isPending,error,data}=useQuery({
    queryKey:['products'],
    queryFn:async()=>{
      const data=await axiosInstance.get<Root>(
        Endpoints.products.getAllProducts
      )

      console.log("data",data);

      return data;
      
    }
  })


  return (
    <> <center><h1>All Products</h1></center>
    <Wrapper>

    {
      !isPending?(
   
        <>
        
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

      <Paper elevation={10} style={{marginLeft:'130px'}}>
        <Grid item xs={6}>
       <Link href={`/${data?.data[0]?.id}`}> <img src={data?.data[0]?.image} alt="" width={510} height={408} style={{marginLeft:'100px',paddingRight:'80px'}}/> </Link> <br />
         <Typography sx={{color:'blue',textAlign:'justify'}}>Title : {data?.data[0]?.title}</Typography><br />
         <Typography>Price {data?.data[0]?.price}</Typography>
        </Grid>
        </Paper>
         
         <Paper elevation={10} style={{marginLeft:'20px'}}>
        <Grid item xs={6}>
       <Link href={`/${data?.data[0]?.id}`}> <img src={data?.data[1]?.image} alt="" width={510} height={408} style={{marginLeft:'110px',paddingRight:'120px'}}/></Link> <br />
        <Typography sx={{color:'blue',textAlign:'justify'}}>Title : {data?.data[1]?.title}</Typography><br />
        <Typography>Price {data?.data[1]?.price}</Typography>
        </Grid>
        </Paper>
       
      </Grid>

    </Box>
<br /><br />

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {
          data?.data.slice(2).map((item,idx)=>{
            return (
              <> 
              <Paper elevation={10} sx={{marginLeft:'70px',marginTop:'10px'}}>
              <Grid item xs={4}>
              <Link href={`/${item?.id}`}> <img src={item.image} alt="" height={360} width={400} style={{paddingRight:'20px'}}/></Link><br /><br />
                 <Typography sx={{textAlign:'justify',color:'brown',fontSize:'17px'}}> Title {item.title.slice(0,30)}</Typography><hr />
                 <Typography>Price {item.price}/- </Typography><hr />
                 <Typography>Rating {item.rating.rate} </Typography>
                 </Grid>
              </Paper>
               
              
              </>
            )
          })
        }
     
     
      
      </Grid>
    </Box>

    
        </>
      

      ):(

        <Grid container spacing={2}>
        <Grid item xs={5}>
        <Skeleton
        sx={{ bgcolor: 'offwhite' , marginLeft:'100px'}}
        variant="rectangular"
        width={610}
        height={508} 
      />
        </Grid>

   
        <Grid item xs={5}>
        <Skeleton
        sx={{ bgcolor: 'offwhite', marginLeft:'90px'}}
        variant="rectangular"
        width={610}
        height={508}
      />
        </Grid>
     
      </Grid>
      )
    
      }
  </Wrapper>

    </>
  );
}
