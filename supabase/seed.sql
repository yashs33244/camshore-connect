-- Create the products table if it doesn't exist
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  features TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert dummy products
INSERT INTO products (name, description, price, category, image_url, features) VALUES
('Pro Security Camera', 'Advanced security camera with night vision and motion detection', 299.99, 'B2B', 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=1000&q=80', ARRAY['4K Resolution', 'Night Vision', 'Motion Detection', 'Cloud Storage']),
('Smart Doorbell', 'WiFi-enabled doorbell with HD camera and two-way audio', 199.99, 'D2C', 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80', ARRAY['HD Video', 'Two-way Audio', 'Motion Alerts', 'Mobile App']),
('Access Control System', 'Enterprise-grade access control system with biometric authentication', 999.99, 'B2B', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80', ARRAY['Biometric Scanner', 'Cloud Management', 'Multi-door Support', 'Audit Logs']),
('Home Security Kit', 'Complete home security solution with cameras and sensors', 499.99, 'D2C', 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80', ARRAY['4 Cameras', 'Motion Sensors', 'Mobile App', '24/7 Monitoring']);