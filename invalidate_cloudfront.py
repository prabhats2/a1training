import boto3
import sys

def invalidate_cloudfront(distribution_id):
    client = boto3.client('cloudfront')
    try:
        response = client.create_invalidation(
            DistributionId=distribution_id,
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': ['/*']
                },
                'CallerReference': str(hash(str(sys.argv)))
            }
        )
        print('Invalidation created successfully:', response['Invalidation']['Id'])
    except Exception as e:
        print('Error creating invalidation:', str(e))

if __name__ == '__main__':
    # Replace this with your actual CloudFront distribution ID
    distribution_id = 'E3QZWABJDFXLK2'
    invalidate_cloudfront(distribution_id)
