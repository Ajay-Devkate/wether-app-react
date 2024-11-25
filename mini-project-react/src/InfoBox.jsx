import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({Info}) {
    let weatherImg = "https://img.pikbest.com/ai/illus_our/20230422/6c88eaae5135b29ac12f98463bd89268.jpg!w700wp";
    // console.log(Info.city);

   
      const displayStyle = {
        display:"none"
      }
 
    
    return (
        <div className='InfoBox'>
        
    <Card sx={{ maxWidth: 345 }} className='InfoCard' style={Info.city === 'xxxx' ? displayStyle : {}}>
      <CardMedia
        sx={{ height: 140 }}
        image={weatherImg}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {(Info.city).toUpperCase()}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p> Temperature = {Info.temp} &deg;C</p>
         <p> Visibility = {Info.visibility} km</p>
         <p> Wind Speed = {Info.windSpeed} km/hr</p>
         <p> Weather = {Info.weather}</p>
        </Typography>
      </CardContent>
    </Card>

        </div>
    )
}