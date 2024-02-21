import { useEffect, useState } from 'react';

// Custom Hook 정의
const useImageFadeIn = (initialOpacity = 0, fadeInTime = 200) => {
  const [imageOpacity, setImageOpacity] = useState(initialOpacity);

  useEffect(() => {
    // 페이지 랜더링 후 fadeInTime(ms) 후에 opacity를 1로 변경
    const timeoutId = setTimeout(() => {
      setImageOpacity(1);
    }, fadeInTime);

    // 컴포넌트 언마운트 시 clearTimeout으로 타이머 제거 (선택적)
    return () => clearTimeout(timeoutId);
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행

  return imageOpacity;
};

export default useImageFadeIn;
