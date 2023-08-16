ifneq (,$(wildcard ./.env))
	include .env
	export
endif

build:
ifdef VERSION
	docker build --rm \
		--build-arg NODE_ENV=production \
		--build-arg REACT_APP_API_BASE_URL=$(REACT_APP_API_BASE_URL) \
		--build-arg REACT_APP_BASE_SHORT_URL=$(REACT_APP_BASE_SHORT_URL) \
		--build-arg REACT_APP_RECAPTCHA_PUBLIC_KEY=$(REACT_APP_RECAPTCHA_PUBLIC_KEY) \
		-t $(IMAGE_NAME):$(VERSION) .
else
	echo "VERSION not defined"
endif

start:
ifdef REACT_APP_API_BASE_URL
ifdef REACT_APP_BASE_SHORT_URL
ifdef REACT_APP_RECAPTCHA_PUBLIC_KEY
	docker run -d \
		-p $(EXPOSED_PORT):$(APP_PORT) \
		-e NODE_ENV=production \
		-e REACT_APP_API_BASE_URL=$(REACT_APP_API_BASE_URL) \
		-e REACT_APP_BASE_SHORT_URL=$(REACT_APP_BASE_SHORT_URL) \
		-e REACT_APP_RECAPTCHA_PUBLIC_KEY=$(REACT_APP_RECAPTCHA_PUBLIC_KEY) \
		--name $(CONTAINER_NAME) $(IMAGE_NAME):$(VERSION)
else
	echo "REACT_APP_RECAPTCHA_PUBLIC_KEY not defined"
endif
else
	echo "REACT_APP_BASE_SHORT_URL not defined"
endif
else
	echo "REACT_APP_API_BASE_URL not defined"
endif

restart:
ifdef REACT_APP_API_BASE_URL
ifdef REACT_APP_BASE_SHORT_URL
ifdef REACT_APP_RECAPTCHA_PUBLIC_KEY
	docker stop $(CONTAINER_NAME) && \
	docker rm $(CONTAINER_NAME) && \
	docker run -d \
		-p $(EXPOSED_PORT):$(APP_PORT) \
		-e NODE_ENV=production \
		-e REACT_APP_API_BASE_URL=$(REACT_APP_API_BASE_URL) \
		-e REACT_APP_BASE_SHORT_URL=$(REACT_APP_BASE_SHORT_URL) \
		-e REACT_APP_RECAPTCHA_PUBLIC_KEY=$(REACT_APP_RECAPTCHA_PUBLIC_KEY) \
		--name $(CONTAINER_NAME) $(IMAGE_NAME):$(VERSION)
else
	echo "REACT_APP_RECAPTCHA_PUBLIC_KEY not defined"
endif
else
	echo "REACT_APP_BASE_SHORT_URL not defined"
endif
else
	echo "REACT_APP_API_BASE_URL not defined"
endif

exec:
	docker container exec -it \
		$(CONTAINER_NAME) sh

logs:
	docker container logs --follow --tail 100 \
		$(CONTAINER_NAME)

remove:
	docker stop $(CONTAINER_NAME) || true && docker rm $(CONTAINER_NAME) || true

test:
	echo "no available tests"

exec:
	docker container exec -it \
		$(CONTAINER_NAME) sh

logs:
	docker container logs --follow --tail 100 \
		$(CONTAINER_NAME)

login:
	echo $(REGISTRY_PASSWORD) | docker login -u $(REGISTRY_USER) --password-stdin $(REGISTRY)

push:
	docker push $(IMAGE_NAME):$(VERSION)

latest:
	docker tag $(IMAGE_NAME):$(VERSION) $(IMAGE_NAME):latest
