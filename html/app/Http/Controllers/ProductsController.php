<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product; 

class ProductsController extends Controller
{
    
    public function index()
    {
    
        $products = Product::all();
        return $products;
    }

    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }
}
