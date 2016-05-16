# == Schema Information
#
# Table name: panels
#
#  id              :integer          not null, primary key
#  name            :string
#  description     :text
#  default_gameset :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Panel < ActiveRecord::Base
  has_many :settings
end
