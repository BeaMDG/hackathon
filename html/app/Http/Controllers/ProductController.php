<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;  
class ProductController extends Controller
{
    public function show($id) {
        $product = Product::find($id);

        $imagePath = public_path('images/' . $product->image_path);

        if (file_exists($imagePath)) {
            return response()->download($imagePath);
        } else {
            return response()->json(['error' => 'Image not found'], 404);
        }
    }
}
