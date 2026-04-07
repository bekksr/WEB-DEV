from django.urls import path
from api.views import fbv

urlpatterns = [
    path('categories/', fbv.category_list),
    path('categories/<int:category_id>/', fbv.category_detail),
    path('products/', fbv.product_list),
    path('products/<int:product_id>/', fbv.product_detail),
    
    path('categories/<int:category_id>/products/', fbv.category_products),
]