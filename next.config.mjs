/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  sassOptions: {
    // ตั้งค่าให้สามารถ import ไฟล์จาก folder styles ได้ง่ายขึ้น
    includePaths: ['./src/app/styles'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      const traverse = (item) => {
        if (!item || typeof item !== 'object') return;

        if (Array.isArray(item)) {
          item.forEach(traverse);
        } else {
          // ตรวจสอบทุกลำดับของ options ที่มี modules
          if (item.options && item.options.modules) {
            // ถ้าเป็น CSS Modules ให้บังคับใช้ hash 6 หลัก
            item.options.modules = {
              ...item.options.modules,
              localIdentName: '[hash:base64:6]',
            };
            if (isServer) {
              console.log('✅ Found CSS Modules: Applied 6-char hash logic');
            }
          }

          // ค้นหาลึกลงไปใน properties อื่นๆ เช่น oneOf, use, rules
          Object.values(item).forEach(traverse);
        }
      };

      traverse(config.module.rules);
    }
    return config;
  },

};

export default nextConfig;
