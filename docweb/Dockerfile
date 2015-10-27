# 时速云使用文档
# 使用时速云 [代码构建] 和 [持续集成]
# Version:1.0.0

FROM node
MAINTAINER TenxCloud Team <service@tenxcloud.com>

# Install nodebb
RUN mkdir -p /opt/code
ADD . /opt/code

# Define working directory.
WORKDIR /opt/code

# Install the dependencies modules
RUN npm install

# Expose ports
EXPOSE 3002

# Define default command.
CMD ["node", "app.js"]
