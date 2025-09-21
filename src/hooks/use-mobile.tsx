import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Interface for device detection
export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

// Enhanced hook with more device info
export function useDeviceInfo(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouch: false,
  });

  React.useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const isMobile = width < MOBILE_BREAKPOINT;
      const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
      const isDesktop = width >= TABLET_BREAKPOINT;
      
      // Check if device has touch capability
      const isTouch = 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        ((navigator as any).msMaxTouchPoints > 0);

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
      });
    };

    // Initial check
    updateDeviceInfo();

    // Listen for window resize
    window.addEventListener('resize', updateDeviceInfo);
    
    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);

  return deviceInfo;
}

// Hook for touch event optimizations
export function useTouchOptimization() {
  const { isTouch } = useDeviceInfo();
  
  React.useEffect(() => {
    if (!isTouch) return;
    
    // Add touch-friendly classes to the body
    document.body.classList.add('touch-device');
    
    // Prevent overscrolling on iOS
    document.body.style.overscrollBehavior = 'none';
    
    // Remove hover states on touch devices
    const style = document.createElement('style');
    style.innerHTML = `
      .luxury-hover:hover::before { left: 0 !important; }
      .luxury-transition { transition: all 0.3s ease !important; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.body.classList.remove('touch-device');
      document.body.style.overscrollBehavior = 'auto';
      document.head.removeChild(style);
    };
  }, [isTouch]);
  
  return { isTouch };
}
