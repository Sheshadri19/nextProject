import { axiosInstance } from "@/Service/Index";
import { Root2 } from "@/TypeScript/commonallinterface";
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router"



const singleProduct=()=>{
    const router=useRouter()
  
    console.log(router);
    
    const {slug}=router?.query
    console.log("id",slug);

    const {isLoading,error,data}=useQuery({
        queryKey:['singleProduct',[slug]],
       
        queryFn:async()=>{
            const data=await axiosInstance.get<Root2>(
                `/products/${slug}`
            )
        console.log("singledata",data);

        return data
        
    }
    
})

return (

    <>
    <Paper elevation={8} sx={{width:'600px', margin:'auto'}}>  
        <Card sx={{ maxWidth: 565, paddingLeft:10}}>
      <CardMedia
        sx={{ height: 440, width:400}}
        image={data?.data.image} 
        title=" " style={{padding:'auto'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.data?.title}
        </Typography>
        <Typography variant="body2" color="brown" >
        Description : {data?.data.description} <br />   
        </Typography>
        <Typography>Rating : {data?.data?.rating?.rate} ⭐</Typography>
        <Typography>Price : {data?.data.price} /- </Typography>
        <Typography>Category : {data?.data.category} </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Add to cart</Button>
      <Link href="/"><Button size="small" variant="contained">Back </Button></Link>
      </CardActions>
    </Card>
    
    </Paper>
    </>
)

}
export default singleProduct;