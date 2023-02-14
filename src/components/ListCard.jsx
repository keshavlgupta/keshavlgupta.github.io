import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoGlobeOutline, IoLogoGithub } from 'react-icons/io5';
import { useMediaQuery } from '@mui/material';

function checkValid(value) {
	return value !== undefined && value !== null && value !== "";
}

const ListCard = ({image, title, details, website, source}) => {
	const hasWebsite = checkValid(website)
	const hasSource = checkValid(source)
	const isLargeScreen = useMediaQuery('(min-width: 1400px)');

	return (
		<Card sx={{ display:'flex', padding: '20px' }}>
			{isLargeScreen && <CardMedia
			component="img"
			sx={{ display: "flex", maxWidth: '200px', maxHeight: "200px" }}
			image={image}
			alt="keshav-gupta-project-image"
			/>}
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
				<Typography component="div" variant="h5">
					{title}
				</Typography>
				<p id="description">{details}</p>
				{(hasWebsite || hasSource) &&
					<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
						{hasWebsite && (
							<a rel="noreferrer" href={website} target="_blank">
								<IconButton aria-label="previous">
									<IoGlobeOutline label={title}/>
								</IconButton>
							</a>
						)}
						{hasSource && (
							<a rel="noreferrer" href={source} target="_blank">
								<IconButton aria-label="previous">
									<IoLogoGithub label={title}/>
								</IconButton>
							</a>
						)}
					</Box>	
				}
				</CardContent>
			</Box>
			
		</Card>
	);
}

export default ListCard