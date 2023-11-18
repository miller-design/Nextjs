'use client'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './VideoPlayer.module.scss'
import Image from 'next/image'
import { getSizeValuesFromString } from '../../../utils'

type VideoPlayerProps = {
	src?: string,
	poster?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	src,
	poster
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const posterSize = poster ? getSizeValuesFromString(poster) : null

  useEffect(() => {
    setIsLoaded(true)
  }, [])

	return (
		<>
			<div className={`${styles.playerWrapper} ${isLoaded && src ? styles.loaded : ``}`}>
				<div className={styles.loadingState}>
					{poster && posterSize ? (
						<Image
							src={poster}
							alt={`video player poster image`}
							width={posterSize?.width}
							height={posterSize?.height}
						/>
					) : (
						<p>Loading...</p>
					)}
					{isLoaded && src && (
						<ReactPlayer
							className={styles.reactPlayer}
							url={src}
							width='100%'
							height='100%'
							playing={true}
							controls={false}
							muted={true}
							playsinline={true}
							loop={true}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export { VideoPlayer }
export type { VideoPlayerProps }
