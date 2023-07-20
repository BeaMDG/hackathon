<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;  
class ProductController extends Controller
{
    // El método show($id), maneja las solicitudes de los productos

    public function show($id) {
        $product = Product::find($id);

        return response()->json($product);
    }

   
}
