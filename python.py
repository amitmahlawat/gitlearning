
nums=[2,5,6,7,9,4]

for i in range(len(nums)):
    minpos=i
    for j in range(i,len(nums)):
        if nums[j]<nums[minpos]:
                minpos=j
                
        temp=nums[i]
        nums[i]=nums[minpos]
        nums[minpos]=temp
        print(nums)
            
print(nums)