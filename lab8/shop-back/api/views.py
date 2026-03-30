from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

# list of all products
def products_list(request):
    products = Product.objects.all()
    json_products = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price, 
            "description": p.description, 
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.id

        }

        for p in products

    ]

    return JsonResponse(json_products, safe = False)

# one product by ID
def product_detail(request, id):
    try:
        p = Product.objects.get(id = id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status = 404)
    
    return JsonResponse({
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category_id
    })

# list of all category
def categories_list(request):
    categories = Category.objects.all()
    json_categories = [
        {
        "id": c.id, "name": c.name
        } 
    for c in categories
    ] 

    return JsonResponse(json_categories, safe = False)

# one category by ID
def category_detail(request, id):
    try: 
        c = Category.objects.get(id = id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status = 404)
    
    return JsonResponse({"id": c.id, "name": c.name})

# list products by category
def products_by_category(request, id):
    try:
        category = Category.objects.get(id = id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status = 404)
    
    products = Product.objects.filter(category = category)
    json_products = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.id
        }
        for p in products
    ]

    return JsonResponse(json_products, safe = False)
