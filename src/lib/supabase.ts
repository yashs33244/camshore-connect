import { createClient } from '@supabase/supabase-js';



const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Run this SQL in your Supabase SQL editor to create the products table and insert sample data:
/*
-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR NOT NULL,
  image_url TEXT,
  features TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Insert sample products
INSERT INTO products (name, description, price, category, image_url, features) VALUES
('Shield', 'Advanced home security system with 24/7 monitoring', 299.99, 'D2C', 'https://images.unsplash.com/photo-1557597774-9d475d5e8142?auto=format&fit=crop&q=80', ARRAY['24/7 Monitoring', 'Mobile App Control', 'Motion Detection', 'Smart Home Integration']),
('Camera', 'High-definition security camera with night vision', 199.99, 'D2C', 'https://images.unsplash.com/photo-1557597774-9d475d5e8142?auto=format&fit=crop&q=80', ARRAY['1080p HD', 'Night Vision', 'Two-way Audio', 'Cloud Storage']),
('Shield-Check', 'Enterprise-grade security solution for businesses', 999.99, 'B2B', 'https://images.unsplash.com/photo-1557597774-9d475d5e8142?auto=format&fit=crop&q=80', ARRAY['Access Control', 'Video Analytics', 'Intrusion Detection', '24/7 Support']);
*/