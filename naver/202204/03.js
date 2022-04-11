import React, {useState, useEffect, useRef} from "react";

function useLazyImageObserver({src}) {
    const [imageSrc, setImageSrc] = useState(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let observer;

        if(imageRef && !imageSrc) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting) {
                        setImageSrc(src);
                        observer.unobserve(imageRef.current);
                    }
                }, {rootMargin: '0px 0px 100px 0px', threshold: [0.25]}
            );
            observer.observe(imageRef.current);
        }
        return () => {
            observer && observer.disconnect(imageRef);
        };
    }, [imageRef, imageSrc, src]);

    return {imageSrc, imageRef};
}

const LazyImage  = React.memo(({src, alt}) => {
    const {imageSrc, imageRef} = useLazyImageObserver({src});

    return (
        <img ref={imageRef} src={imageSrc} alt={alt} />
    )
})

function ImageGallery({ images }) {
    // Use browser console and console.log() for debugging
    
    
    return <div style={{display: 'grid', gridTemplateRows: 'repeat(2, 200px)', gridTemplateColumns: 'repeat(3, 1fr)',  gap: 0 }}>
        {images.map((image) => {
            return (
                // <img ref={tabRef} src={image} alt="image" />
                <LazyImage src={image} alt="test" />
            )
        })}
    </div>;
}

export default ImageGallery;

