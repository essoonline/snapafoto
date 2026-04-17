#!/bin/bash

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Snapafoto Git Push Script ===${NC}\n"

# Check if there are changes
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}ไม่มีการเปลี่ยนแปลงใด ๆ${NC}"
    exit 0
fi

# Show changed files
echo -e "${GREEN}ไฟล์ที่เปลี่ยนแปลง:${NC}"
git status --short
echo ""

# Auto-generate commit message with timestamp
commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
echo -e "${GREEN}Commit message: ${commit_message}${NC}\n"

# Add all changes
echo -e "\n${YELLOW}กำลังเพิ่มไฟล์...${NC}"
git add -A

# Commit
echo -e "${YELLOW}กำลังสร้าง commit...${NC}"
git commit -m "$commit_message"

if [ $? -eq 0 ]; then
    # Push
    echo -e "${YELLOW}กำลังอัพขึ้น GitHub...${NC}"
    git push
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ สำเร็จ! ข้อมูลอัพขึ้น GitHub เรียบร้อยแล้ว${NC}"
    else
        echo -e "${RED}❌ เกิดข้อผิดพลาดขณะ push${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ เกิดข้อผิดพลาดขณะ commit${NC}"
    exit 1
fi
