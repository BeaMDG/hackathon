<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        $imageFile = $request->file('image'); 
        $imageName = $imageFile->getClientOriginalName();
        $imagePath = '/var/www/html/public/images/' . $imageName;
        $imageFile->move('/var/www/html/public/images', $imageName);

        $product = new Product();
        $product->image_path = $imagePath;
        $product->save();

        return back()
            ->with('success', 'You have successfully uploaded an image.')
            ->with('image', $imagePath);
    }
}

