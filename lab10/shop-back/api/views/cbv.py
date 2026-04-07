from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer
from django.http import Http404

class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serilaizer = CategorySerializer(categories, many = True)
        return Response(serilaizer.data)

    def post(self, request):
        serilaizer = CategorySerializer(data = request.data)
        if serilaizer.is_valid():
            serilaizer.save()
            return Response(serilaizer.data , status = status.HTTP_201_CREATED)
        return Response(serilaizer.errors, status = status.HTTP_400_BAD_REQUEST)

class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(id = category_id)
        except Category.DoesNotExist:
            raise Http404
        
    def get(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)